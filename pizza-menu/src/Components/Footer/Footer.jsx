export default function Footer() {
  const hours = new Date().getHours();
  const openHours = 12;
  const closeHour = 22;
  const isOpen = openHours && hours <= closeHour;
  return (
    <>
      <footer className="footer">
        {isOpen > 0 ? (
          <div className="order">
            <p>
              {isOpen
                ? `We're currently open until ${closeHour}:00. Come visit us or order online`
                : `We're currently close. Open hours: ${openHours}:00 & Closing hour: ${closeHour}:00`}
            </p>
            <button className="btn">Order now</button>
          </div>
        ) : (
          <p>
            We're happy to welcome you between {openHours}:00 and {closeHour}
            :00.
          </p>
        )}
      </footer>
    </>
  );
}
