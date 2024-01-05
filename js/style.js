//---------------------------------------Bài tập tính lương----------------------------------------------------

document.getElementById("btnKetQua1").onclick = function () {
  var soNgayLam = Number(document.getElementById("txt_soNgayLam").value);
  var luongMotNgay = Number(document.getElementById("txt_luongMotNgay").value);

  if (soNgayLam < 0 && luongMotNgay < 0) {
    alert("Giá trị không hợp lệ !!! Vui lòng nhập lại");
  } else {
    var answer = soNgayLam * luongMotNgay;
  }

  document.getElementById(
    "ketQua1"
  ).innerHTML = `Tiền lương tháng này của bạn là ${answer.toLocaleString({
    style: "currency",
    currency: "VND",
  })} VNĐ`;
};

//--------------------------------------Bài tập tính giá trị trung bình--------------------------------------------

document.getElementById("btnKetQua2").onclick = function () {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);
  var num4 = Number(document.getElementById("num4").value);
  var num5 = Number(document.getElementById("num5").value);

  var avr = (num1 + num2 + num3 + num4 + num5) / 5;

  document.getElementById("ketQua2").innerHTML = `Giá trị trung bình là ${avr}`;
};

//--------------------------------------Bài tập quy đổi tiền---------------------------------------------------------

document.getElementById("btnKetQua3").onclick = function () {
  var tienUSD = Number(document.getElementById("tienUSD").value);

  if (tienUSD < 0) {
    alert("Giá trị không hợp lệ !!! Vui lòng nhập lại");
  } else {
    var tienVND = tienUSD * 23500;
  }

  document.getElementById(
    "ketQua3"
  ).innerHTML = `Số tiền sau quy đổi là ${tienVND.toLocaleString({
    style: "currency",
    currency: "VND",
  })} VNĐ`;
  console.log(typeof tienUSD);
};

//--------------------------------------Bài tập tính diện tích và chu vi hình chữ nhật-------------------------------------

document.getElementById("btnKetQua4").onclick = function () {
  var chieuDai = Number(document.getElementById("chieuDai").value);
  var chieuRong = Number(document.getElementById("chieuRong").value);

  if (chieuDai < 0 && chieuRong < 0) {
    alert("Giá trị không hợp lệ !!! Vui lòng nhập lại");
  } else {
    var C = (chieuDai + chieuRong) * 2;
    var S = chieuDai * chieuRong;
  }
  document.getElementById(
    "ketQua4"
  ).innerHTML = `Diện tích hình chữ nhật là ${S} <br> Chu vi hình chữ nhật là ${C}`;
};

//--------------------------------------Bài tập tính tổng 2 ký số-------------------------------------

document.getElementById("btnKetQua5").onclick = function () {
  var haiChuSO = Number(document.getElementById("haiChuSo").value);
  var soDau = Math.floor(haiChuSO / 10);
  var soThuHai = haiChuSO % 10;
  var noteText = document.getElementById("helpId");

  if (haiChuSO < 100) {
    var tong = soDau + soThuHai;
  } else {
    alert("Giá trị không hợp lệ !!! Vui lòng nhập lại");
    return;
  }
  document.getElementById("ketQua5").innerHTML = `Tổng hai ký số là ${tong}`;
};
