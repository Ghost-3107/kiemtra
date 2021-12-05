function tinhDiem() {
    var thunhap = document.getElementById("thunhap").value;
    var money = document.getElementById("money").value;
    var ls = document.getElementById("ls").value;
    var time = document.getElementById("time").value;

    var thunhapTag= Number(thunhap);
    var moneyTag= Number(money);
    var lsTag= Number(ls);
    var timeTag= Number(time);

    var kq1 = thunhapTag*0.6;
    var kq2 = (moneyTag*(1+lsTag))/timeTag;
    var tienTraDuoc = document.getElementById("tientraduoc");
    var tienPhaiTra = document.getElementById("tienphaitra");
    var result = document.getElementById("result");
    if (isNaN(kq1)||isNaN(kq2)||thunhapTag<0||moneyTag<0||lsTag<0||timeTag<0||!thunhap||!money||!ls||!time) {
        tienTraDuoc.textContent = "";
        tienPhaiTra.textContent = "";
        result.textContent= "";
        alert("Nhập số dương");
        return;
      }
    if(kq1>kq2){
        tienTraDuoc.textContent= "Số tiền có thể trả 1 tháng : "+kq1;
        tienPhaiTra.textContent= "Số tiền phải trả ngân hàng mỗi tháng : "+ kq2.toFixed(2);
        result.textContent= "Đủ điều kiện vay";
        document.getElementById("ket-qua").style.backgroundColor = "green";
    }else{
        tienTraDuoc.textContent= "Số tiền có thể trả 1 tháng : "+kq1;
        tienPhaiTra.textContent= "Số tiền phải trả ngân hàng mỗi tháng : "+ kq2.toFixed(2);
        result.textContent= "Không đủ điều kiện vay";
        document.getElementById("ket-qua").style.backgroundColor = "red";
    }
}
var button = document.getElementById("button");
button.addEventListener("click", function(e) {
    e.preventDefault();
    tinhDiem();
})