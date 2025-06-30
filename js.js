// смена картинок при наведении 
document.addEventListener('DOMContentLoaded', () => {
    const pic = document.querySelector('.block2_pic1');
    const images = [
      '../img/block2_pic1.png',
      '../img/block2_pic2.png',
      '../img/block2_pic3.png',
      '../img/block2_pic4.png',
      '../img/block2_pic5.png'
    ];
  
    let current = 0;
    let interval;
  
    const block = document.querySelector('.block2');
  
    block.addEventListener('mouseenter', () => {
      interval = setInterval(() => {
        current = (current + 1) % images.length;
        pic.style.backgroundImage = `url("${images[current]}")`;
      }, 1000);
    });
  
    block.addEventListener('mouseleave', () => {
      clearInterval(interval);
      current = 0;
      pic.style.backgroundImage = `url("${images[0]}")`;
    });
  });


// плакаты на полный экран и затемнение фона + закрыть 
 document.addEventListener('DOMContentLoaded', () => {
    const posters = document.querySelectorAll('.poster');
    const modal = document.getElementById('poster-modal');
    const modalContent = document.getElementById('modal-content');
  
    posters.forEach(poster => {
      poster.addEventListener('click', () => {
        const bgImage = getComputedStyle(poster).backgroundImage;
        modalContent.style.backgroundImage = bgImage;
        modal.style.display = 'flex';
      });
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  });

// Кнопка для заяки
document.addEventListener("DOMContentLoaded", () => {
    const border = document.querySelector(".profile_block2 .border");
    if (!border) return;
  
    const btn = document.createElement("button");
    btn.textContent = "Добавить товары";
    btn.classList.add("add-products-btn");
  
    const nameOf = border.querySelector(".name_of");
    if (nameOf) {
      nameOf.insertAdjacentElement("afterend", btn);
    } else {
      border.appendChild(btn);
    }
    btn.addEventListener("click", () => {
      window.location.href = "not_found.html"; 
    });
  });

// Возвращает на предыдущую страницу
document.addEventListener("DOMContentLoaded", function () {
    const pic = document.querySelector(".pic_notfound");
  
    if (pic) {
      pic.addEventListener("click", function () {
        window.history.back(); 
      });
    }
  });