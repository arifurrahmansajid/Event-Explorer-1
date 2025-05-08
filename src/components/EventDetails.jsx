import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth(); // Now using your Firebase auth context
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || ""
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { state: { from: `/events/${id}` } });
      toast.info("Please login to view event details");
    }
  }, [user, loading, navigate, id]);

  // Pre-fill form with user data if available
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || ""
      });
    }
  }, [user]);

  // Fetch event data
  useEffect(() => {
    if (user && !loading) {
      fetch('/events.json')
        .then((res) => res.json())
        .then((data) => {
          const selectedEvent = data.find((item) => item.id === id);
          if (selectedEvent) {
            setEvent(selectedEvent);
          } else {
            navigate("/not-found");
          }
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
          toast.error("Failed to load event details");
        });
    }
  }, [id, navigate, user, loading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleReservation = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success(`Seat reserved successfully for ${formData.name}!`);
    setFormData({ name: "", email: "" });
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center py-10">Redirecting to login...</div>;
  }

  if (!event) {
    return <div className="text-center py-10">Loading event details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{event.name} | Event Details</title>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Events
          </Link>
        </div>

        {/* Event Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={event.thumbnail} 
            alt={event.name} 
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{event.name}</h1>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {event.category}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <div className="space-y-4">
                  {/* ... (rest of your event details JSX remains the same) ... */}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Description</h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Reserve Your Seat</h2>
              <form onSubmit={handleReservation}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
                >
                  Reserve Seat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;