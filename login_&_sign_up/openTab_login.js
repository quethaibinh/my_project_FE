function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    const tabLinks = document.getElementsByClassName('tab-link');

    // Ẩn tất cả các nội dung tab
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        tabContents[i].classList.remove('active');
    }

    // Xóa trạng thái active khỏi tất cả các tab link
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }

    // Hiển thị tab hiện tại và thêm class active cho tab link
    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

export {openTab};