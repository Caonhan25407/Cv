let fullName = "Cao Tran Thien Nhan";
let birthYear = 2007;
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;

console.log(`
    Name: ${fullName}
    Age: ${age}
    Student: ${isStudent}
    `);

const tinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh)/3;
}

const xepLoai = (diemTB) => {
    if(diemTB >= 9) {
        return "Xuat sac";
    } else if(diemTB >=8 && diemTB < 9) {
        return "Gioi";
    } else if(diemTB >=7 && diemTB < 8) {
        return "Kha";
    } else if(diemTB >=6 && diemTB < 7) {
        return "TB";
    } else return "Yeu";
}

const diemToan = 10;
const diemVan = 7;
const diemAnh = 8;
const myTB = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(`
    DTB: ${myTB};
    Xep loai: ${xepLoai(myTB)};
    `);

const track = document.getElementById('track');
const item = track.querySelector('.item');

function fillTrack() {
    const screenWidth = window.innerWidth;
    while (track.offsetWidth < screenWidth * 2) {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    }
}
fillTrack();

window.addEventListener('resize', fillTrack);