const PASSWORD = "8426"; // แก้รหัสที่นี่

function checkPassword() {
  let input = document.getElementById("password").value;
  if (input === PASSWORD) {
    window.location.href = "page2.html"; // ไปหน้าถัดไป
  } else {
    alert("ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ");
  }
}
if (window.location.pathname !== '/index.html') {
    window.location.href = '/index.html'; // เปลี่ยนเป็น path หน้าแรกของคุณ
  }