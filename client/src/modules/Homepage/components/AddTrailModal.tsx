import React, { useState } from "react";
import { addTrail } from "../../../api/api";

interface AddTrailModalProps {
  onClose: () => void;
}

const AddTrailModal: React.FC<AddTrailModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: 0,
    estimatedTime: "",
    imageUrl: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async () => {
    try {
      await addTrail(formData);
      console.log("Trail added successfully");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding trail:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Trail</h2>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Trail Name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full border p-2 rounded"
            value={formData.location}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="estimatedTime"
            placeholder="Estimated Time"
            className="w-full border p-2 rounded"
            value={formData.estimatedTime}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className="w-full border p-2 rounded"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="w-full border p-2 rounded"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Rating:</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`text-2xl ${
                  star <= formData.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-2">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Add Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTrailModal;
