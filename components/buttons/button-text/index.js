const ButtonText = (props) => {
  const { label, onPress, styleContainer, type = "button" } = props;
  return (
    <button
      className={`${styleContainer} px-4 py-2 rounded-lg text-sm font-bold text-gray-500 animate-bounce ease-in-out duration-1000`}
      onClick={onPress}
      type={type}
    >
      {label}
    </button>
  );
};

export default ButtonText;
