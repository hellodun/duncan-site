const FooterNote = () => {
  return (
    <div className="font-bold mb-4 bg-gray-900 w-full">
      <span>Made with &nbsp;&#10084;&#65039; &nbsp;</span>
      <span>helloDun &nbsp;</span>
      <span>&copy; &nbsp; {new Date().getFullYear()}</span>
    </div>
  );
};

export default FooterNote;
