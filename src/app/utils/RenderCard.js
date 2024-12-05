import Card from "../Card";
const leftSection = document.querySelector("#left");
const rightSection = document.querySelector("#right");

function RenderCard(data) {
  leftSection.innerHTML = "";
  rightSection.innerHTML = "";

  data.forEach((item) => {
    const top = [
      {
        key: "From",
        value: item?.from?.name,
        email: item?.from?.email,
      },

      {
        key: "Subject",
        value: item?.subject,
      },
    ];

    const date = new Date(item?.date);
    const localTime = date.toLocaleString();

    const cardDiv = Card(
      top,
      item?.short_description,
      item.from.name.slice(0, 1),
      localTime,
      item.id
    );

    leftSection.appendChild(cardDiv);
  });
}

export default RenderCard;
