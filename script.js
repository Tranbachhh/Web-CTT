const TTSVbd={
    hoVaTen : "Trần Xuân Bách",
    namVaoTruong : "2020",
    bacDaoTao: "Đại học đại trà",
    chuongTrinh : "Khoa học Máy tính 2020",
    Vien : "Trường Công nghệ thông tin và Truyền Thông",
    tinhTrangHT:"Học",
    Lop:"Khoa học máy tính 02-K65",
    khoaHoc:"65",
    Email:"bach.tx20204634@sis.hust.edu.vn",
    gioiTinh:"Nam",
    url_avt:"./img/avt.png"
}
var TTSV={ ...TTSVbd};
var TTSVtt={ ...TTSVbd};

function edit(){
    var editForm=document.getElementById("editForm");
    editForm.style.zIndex="10";
    editForm.style.display="";

    document.getElementById("hoVaTen").value=TTSV.hoVaTen;
    document.getElementById("namVaoTruong").value=TTSV.namVaoTruong;
    document.getElementById("bacDaoTao").value=TTSV.bacDaoTao;
    document.getElementById("chuongTrinh").value=TTSV.chuongTrinh;
    document.getElementById("Vien").value=TTSV.Vien;
    document.getElementById("tinhTrangHT").value=TTSV.tinhTrangHT;
    document.getElementById("Lop").value=TTSV.Lop;
    document.getElementById("khoaHoc").value=TTSV.khoaHoc;
    document.getElementById("Email").value=TTSV.Email;
    document.getElementById("gioiTinh").value=TTSV.gioiTinh;
    document.getElementById("avt_edit").src=TTSV.url_avt;
    document.getElementById("url_avt").value="";
}

function luu(){
    var editForm=document.getElementById("editForm");
    editForm.style.zIndex="-10";
    editForm.style.display="none";

    console.log(TTSV);
    document.getElementById("ttHoVaTen").innerText=TTSV.hoVaTen;
    document.getElementById("ttNamVaoTruong").innerText=TTSV.namVaoTruong;
    document.getElementById("ttBacDaoTao").innerText=TTSV.bacDaoTao;
    document.getElementById("ttChuongTrinh").innerText=TTSV.chuongTrinh;
    document.getElementById("ttVien").innerText=TTSV.Vien;
    document.getElementById("ttTinhTrangHT").innerText=TTSV.tinhTrangHT;
    document.getElementById("ttLop").innerText=TTSV.Lop;
    document.getElementById("ttKhoaHoc").innerText=TTSV.khoaHoc;
    document.getElementById("ttEmail").innerText=TTSV.Email;
    document.getElementById("ttGioiTinh").innerText=TTSV.gioiTinh;
    document.getElementById("ttAvt").src=TTSV.url_avt;
    TTSVtt={ ...TTSV};
}

function ok(){
    TTSV.hoVaTen=document.getElementById("hoVaTen").value;
    TTSV.namVaoTruong=document.getElementById("namVaoTruong").value;
    TTSV.bacDaoTao=document.getElementById("bacDaoTao").value;
    TTSV.chuongTrinh=document.getElementById("chuongTrinh").value;
    TTSV.Vien=document.getElementById("Vien").value;
    TTSV.tinhTrangHT=document.getElementById("tinhTrangHT").value;
    TTSV.Lop=document.getElementById("Lop").value;
    TTSV.khoaHoc=document.getElementById("khoaHoc").value;
    TTSV.Email=document.getElementById("Email").value;
    TTSV.gioiTinh=document.getElementById("gioiTinh").value;
    TTSV.url_avt=document.getElementById("avt_edit").src;
}


function cancel(){
    TTSV={ ...TTSVtt};
    luu();
}

function reset(){
    TTSV={ ...TTSVbd};
    luu();
}