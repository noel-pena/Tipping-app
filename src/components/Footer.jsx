export const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className="footer">
      <footer>NPX | Copyright © {year}</footer>
    </div>
  );
};
