import USER_ICON from '../logos/user-profile-icon.svg';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 text-white">
      <img
        className="h-8 bg-white rounded-full"
        alt="user"
        src={USER_ICON}
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
