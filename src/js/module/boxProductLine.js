export function boxProductLine() {
    const lineBlock = document.querySelector(".box-product-line");

    if (!lineBlock) return;

    const handleScroll = () => {
        if (window.innerWidth <= 670) {
            lineBlock.classList.remove("open");
            return;
        }

        const scrollThreshold = document.documentElement.scrollHeight / 8;
        if (window.scrollY > scrollThreshold) {
            lineBlock.classList.add("open");
        } else {
            lineBlock.classList.remove("open");
        }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Проверка при загрузке страницы
}