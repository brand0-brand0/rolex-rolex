document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('draggableImage');
    let isDragging = false, x = 0, y = 0, mouseX = 0, mouseY = 0;

    img.addEventListener('mousedown', (e) => {
        isDragging = true;
        mouseX = e.clientX - img.offsetLeft;
        mouseY = e.clientY - img.offsetTop;
        img.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            x = e.clientX - mouseX;
            y = e.clientY - mouseY;
            const rect = img.getBoundingClientRect();
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            img.style.position = 'absolute';
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            img.style.cursor = 'grab';
        }
    });
});
