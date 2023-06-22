// Скрипт для реализации слайдера

window.onload = function() {
    let sliderContainer = document.querySelector(".slider");
    let sliderThumb = document.getElementById("slider-thumb");
    let sliderValue = document.getElementById("slider-value");
  
    // Устанавливаем начальное значение
    let minValue = 0;
    let maxValue = 100;
    let currentValue = minValue;
    let sliderWidth = sliderContainer.offsetWidth - sliderThumb.offsetWidth;
  
    // Обновляем значение и положение бегунка при перемещении
    function updateSlider(event) {
      let newPosition = event.clientX - sliderContainer.getBoundingClientRect().left;
      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > sliderWidth) {
        newPosition = sliderWidth;
      }
  
      let percentage = (newPosition / sliderWidth) * 100;
      currentValue = Math.round((percentage / 100) * (maxValue - minValue)) + minValue;
  
      sliderThumb.style.left = newPosition + "px";
      sliderValue.innerHTML = currentValue;
    }
  
    // Обработка событий мыши
    sliderThumb.addEventListener("mousedown", function(event) {
      event.preventDefault();
  
      // Обновляем значение и положение бегунка при перемещении
      function moveSlider(event) {
        updateSlider(event);
      }
  
      // Останавливаем обновление значения и положения бегунка
      function stopSlider() {
        document.removeEventListener("mousemove", moveSlider);
        document.removeEventListener("mouseup", stopSlider);
      }
  
      document.addEventListener("mousemove", moveSlider);
      document.addEventListener("mouseup", stopSlider);
    });
  
    // Обновляем значение и положение бегунка при клике на ползунке
    sliderContainer.addEventListener("click", function(event) {
      updateSlider(event);
    });
  };
  // Скрипт для обработки событий и открытия/закрытия модального окна

window.onload = function() {
    // Обработка события клика на кнопке открытия окна
    let openModalButton = document.getElementById("open-modal");
    openModalButton.addEventListener("click", openModal);
  
    // Обработка события клика на кнопке закрытия окна
    let closeModalButton = document.getElementById("close-modal");
    closeModalButton.addEventListener("click", closeModal);
  };
  
  // Функция для открытия модального окна
  function openModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  // Функция для закрытия модального окна
  function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  