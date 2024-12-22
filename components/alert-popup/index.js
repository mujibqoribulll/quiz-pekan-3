import ButtonText from "../buttons/button-text";

const AlertPopup = (props) => {
  const { onClose, isOpen, onPress } = props;
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-screen-sm relative">
        <p>Are you sure you want to delete this task?</p>
        <div className="flex flex-row justify-evenly items-center mt-8">
          <ButtonText
            label="No"
            styleContainer={"animate-none bg-gray-900 text-white"}
            onPress={onClose}
          />
          <ButtonText
            label="Yes"
            styleContainer={"animate-none bg-red-500 text-white"}
            onPress={onPress}
          />
        </div>
      </div>
    </div>
  );
};

export default AlertPopup;
