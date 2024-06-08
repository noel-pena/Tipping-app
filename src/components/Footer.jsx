export const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className="footer">
      <footer>Noel P Inc | Copyright © {year}</footer>
    </div>
  );
};
