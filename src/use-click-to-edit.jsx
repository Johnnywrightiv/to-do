import { useState } from 'react';

const useClickToEdit = (initialText) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(initialText);
  const [lastSavedText, setLastSavedText] = useState(initialText);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    setLastSavedText(editedText); // Update last saved text
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSaveEdit();
    } else if (event.key === 'Escape') {
      setEditedText(lastSavedText); // Revert to last saved text on ESC
      setIsEditing(false);
    }
  };

  return {
    isEditing,
    editedText,
    setEditedText,
    handleEditClick,
    handleSaveEdit,
    handleKeyPress,
  };
};

export default useClickToEdit;
