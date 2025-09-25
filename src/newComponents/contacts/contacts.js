document.addEventListener("DOMContentLoaded", () => {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    let contacts;
    try {
        contacts = JSON.parse(mapContainer.dataset.contacts);
    } catch (e) {
        console.error("Неверный JSON в data-contacts", e);
        return;
    }

    ymaps.ready(() => {
        const map = new ymaps.Map("map", {
            center: [56.5, 85],
            zoom: 4,
            controls: ["zoomControl"]
        });

        const items = document.querySelectorAll(".contacts__item");

        contacts.forEach((c, i) => {
            if (!c.coords) return;

            const coords = c.coords.map(Number);

            const placemark = new ymaps.Placemark(
                coords,
                {
                    iconCaption: `Офис ${c.city}`
                },
                {
                    preset: "islands#blueDotIconWithCaption"
                }
            );

            map.geoObjects.add(placemark);

            if (items[i]) {
                items[i].addEventListener("click", () => {
                    map.setCenter(coords, 17, { duration: 500 });
                });
            }

            placemark.events.add("click", () => {
                map.setCenter(coords, 17, { duration: 500 });
            });
        });

        if (map.geoObjects.getLength() > 0) {
            map.setBounds(map.geoObjects.getBounds(), {
                checkZoomRange: true,
                zoomMargin: 40
            });
        }
    });
});
