import style from './scss/Footer.module.scss';

const Footer = ({ footer }) => {
	console.log(footer);
	return (
		<footer className={style.footer_container}>
			<div className={style.footer_wrapper}>
				<div className={style.footer_support_info}>
					<div className={style.info_container}>
						<div className={style.title}>
							<strong>HỖ TRỢ KHÁCH HÀNG</strong>
						</div>
						<div className={style.sub_title}>
							Hotline: <strong>1900-8922</strong>
						</div>
						<a className={style.detail} href="#cau-hoi-thuong-gap">
							Các câu hỏi thường gặp
						</a>
						<a className={style.detail} href="#huong-dan-dat-hang">
							Hướng dẫn đặt hàng
						</a>
						<a className={style.detail} href="#huong-dan-thanh-toan">
							Hướng dẫn thanh toán
						</a>
						<a className={style.detail} href="#chinh-sach-giao-hang">
							Chính sách giao nhận hàng
						</a>
						<a className={style.detail} href="#chinh-sach-doi-tra">
							Chính sách trả hàng và hoàn tiền
						</a>
						<a className={style.detail} href="#huong-dan-mua-tra-gop">
							Hướng dẫn mua trả góp
						</a>
						<a className={style.detail} href="#su-dung-voucher">
							Hướng dẫn &amp; điều kiện sử dụng Voucher
						</a>
						<a className={style.detail} href="#sua-chua-thay-the">
							Hướng dẫn sửa chữa - thay thế
						</a>
					</div>
					<div className={style.info_container}>
						<div className={style.title}>
							<strong>VỀ GIÁ KHO</strong>
						</div>
						<a className={style.detail} href="#gioi-thieu">
							Giới thiệu
						</a>
						<a className={style.detail} href="#tuyen-dung">
							Tuyển dụng
						</a>
						<a className={style.detail} href="#quy-che-hoat-dong">
							Quy chế hoạt động
						</a>
						<a className={style.detail} href="#chinh-sach-bao-mat">
							Chính sách bảo mật
						</a>
						<a className={style.detail} href="#dieu-khoan-su-dung">
							Điều khoản sử dụng
						</a>
						<a className={style.detail} href="#chinh-sach-bao-hanh">
							Chính sách bảo hành
						</a>
						<a className={style.detail} href="#Gia-kho-member">
							Điểm tích lũy GIÁ KHO Member
						</a>
						<a className={style.detail} href="#kho-cong-nghe">
							KHO công nghệ
						</a>
						<a className={style.detail} href="#he-thong-cong-tac-vien">
							Hệ Thống Cộng Tác Viên Toàn Quốc
						</a>
					</div>

					<div className={style.info_container}>
						<div className={style.title}>
							<strong>THÔNG TIN HỖ TRỢ</strong>
						</div>
						<a className={style.detail} href="#ban-hang-doanh-nghiep">
							Bán hàng Doanh nghiệp
						</a>
						<a className={style.detail} href="#hop-tac-cung-GIA-KHO">
							Hợp tác cùng GIÁ KHO
						</a>
						<a className={style.detail} href="#quy-dinh-sao-luu-du-lieu">
							Quy định về việc sao lưu dữ liệu
						</a>
						<a className={style.detail} href="#">
							Email: trogiup@dienthoaigiakho.vn
						</a>
					</div>
					<div className={style.info_container}>
						<div className={style.title}>
							<strong>PHƯƠNG THỨC THANH TOÁN</strong>
						</div>
						<div className={style.content}>
							<img
								className={style.payment_icon}
								src="https://dienthoaigiakho.vn/60a0a9fc26c0cc822fb6b0b596543e3e.png"
								alt="visa"
							/>
							<img
								className={style.payment_icon}
								src="https://dienthoaigiakho.vn/ce9eaae674c782bbc65b23f933dcedce.png"
								alt="mastercard"
							/>
							<img
								className={style.payment_icon}
								src="https://dienthoaigiakho.vn/fdd8b43d0ecb675f6c4b9c6807452443.png"
								alt="internetBanking"
							/>
							<img
								className={style.payment_icon}
								src="https://dienthoaigiakho.vn/5c5ea0fcdcee67d581c91dfb65b1de52.png"
								alt="tragop"
							/>
							<img
								className={style.payment_icon}
								src="https://dienthoaigiakho.vn/46a5c0fe3525c956a05137434dde06ac.png"
								alt="tienmat"
							/>
						</div>
						<div className={style.title}>
							<strong>KẾT NỐI VỚI CHÚNG TÔI</strong>
						</div>
						<div className={style.content}>
							<a href="https://www.facebook.com/dienthoaigiakho.vn/">
								<img
									className={style.social_icon}
									src="https://webstockreview.net/images/facebook-png-icon-2.png"
									alt="facebook"
								/>
							</a>
							<a href="https://www.youtube.com/channel/UCXQDv0xIHMLxOzhfDXDcHfQ">
								<img
									className={style.social_icon}
									src="https://cdn.icon-icons.com/icons2/70/PNG/512/youtube_14198.png"
									alt="youtube"
								/>
							</a>
							<a href="#zalo">
								<img
									className={style.social_icon}
									src="https://baokhanhhoa.vn/dataimages/201905/original/images5363814_iconzalo__1_.png"
									alt="zalo"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className={style.footer_general_info}>
					<div className={style.info_container}>
						<div className={style.title}>
							<strong>
								Địa chỉ SHOWROOM &amp; tiếp nhận gửi hàng đổi/trả/bảo
								hành:
							</strong>
						</div>
						<div className={style.detail}>
							Trung tâm GIÁ KHO- 121 Chu Văn An, Phường 26, Bình Thạnh TP.
							Hồ Chí Minh
						</div>
						<div className={style.detail}>
							(Làm việc 9h-22h vui lòng liên hệ&nbsp;1900-8922&nbsp;trước để
							hướng dẫn đặt nhận máy)
						</div>
					</div>
					<a target="_blank" href="http://online.gov.vn/Home/WebDetails/29830">
						<img
							className={style.authorize_icon}
							src="https://dienthoaigiakho.vn/6f4cf387d8cf624cacabee3483a1e0fc.png"
							alt="authorize"
						/>
					</a>
				</div>
				<div className={style.footer_tag}>
					<p>
						Apple iPhone X 256 GB&nbsp;/&nbsp; Apple iPhone X 64
						GB&nbsp;/&nbsp; Samsung Galaxy S9&nbsp;/&nbsp; Samsung Galaxy S9
						Plus&nbsp;/&nbsp; Nokia 8&nbsp;/&nbsp; Samsung Galaxy Note
						8&nbsp;/&nbsp; Samsung Galaxy S8&nbsp;/&nbsp; Samsung Galaxy S8
						Plus&nbsp;/&nbsp; Xiaomi Mi MIX 2&nbsp;/&nbsp; Sony Xperia XZ
						Premium&nbsp;/ Sony Xperia XZ1&nbsp;/&nbsp; ASUS ZenFone Max Plus
						M1&nbsp;/&nbsp; ASUS ZenFone 4 Selfie&nbsp;/&nbsp; ASUS ZenFone 4
						Max Pro&nbsp;/&nbsp; OPPO F5 Youth&nbsp;/&nbsp; Huawei nova
						2i&nbsp;/&nbsp; Nokia 6&nbsp;/&nbsp; Nokia 3310&nbsp;/ HTC
						U11&nbsp;/&nbsp; Motorola Moto G5S Plus&nbsp;/&nbsp; SIM 3G
						Vietnamobile&nbsp;/&nbsp; Xiaomi Redmi 5A 16GB&nbsp;/ Samsung
						Galaxy A8 (2018)&nbsp;/ Samsung Galaxy Note 8 Orchild
						Gray&nbsp;/&nbsp; Tai nghe Samsung Earphones Tuned by AKG
						EO-IG955&nbsp;/ Pin dự phòng ZMI MF885 10000 mAh kiêm phát WiFi từ
						SIM 4G&nbsp;/ Tai nghe Samsung Galaxy S7&nbsp;/ Tai nghe LG
						QuadBeat 3 HSS-F630&nbsp;/&nbsp; iPad Air&nbsp;/&nbsp; iPad Air
						2&nbsp;/&nbsp; iPad Pro&nbsp;/&nbsp; iPad 9.7&nbsp;/&nbsp; iPad
						Mini&nbsp;/&nbsp; iPad Mini 2&nbsp;/&nbsp; iPad Mini
						3&nbsp;/&nbsp; iPad Mini 4&nbsp;/ Máy tính bảng&nbsp; Asus&nbsp;/
						Máy tính bảng&nbsp; Huawei /&nbsp; Macbook&nbsp;/&nbsp; Macbook
						2016&nbsp;/&nbsp; Macbook 2017 /&nbsp; Macbook Air /&nbsp; Macbook
						Air 2017&nbsp;/&nbsp; Macbook Pro&nbsp;/&nbsp; Macbook Pro 2016
						/&nbsp; Macbook Pro 2017&nbsp;/&nbsp;Điện thoại
						Vivo&nbsp;/&nbsp;Điện thoại Huawei&nbsp;/&nbsp;Điện thoại
						Samsung&nbsp;/&nbsp;Điện thoại Asus&nbsp;/&nbsp;Điện thoại
						Sony&nbsp;/&nbsp;Điện thoại HTC&nbsp;/&nbsp;Điện thoại
						Xiaomi&nbsp;/&nbsp;Điện thoại Motorola&nbsp;/Điện thoại
						OPPO&nbsp;/&nbsp; Điện thoại Nokia
					</p>
				</div>
			</div>
			<div className={style.footer_coppyright}>
				<div className={style.copyright}>
					Ⓒ 2019 – Bản quyền thuộc website Dienthoaigiakho.vn Giấy chứng nhận
					Kinh doanh : 41O8033312 UBND Q. Bình Thạnh, HCM cấp ngày 12/11/2016 |
					Mã số thuế : 8287794405 | Địa Chỉ Văn phòng: 121 Chu Văn An. P26 Bình
					Thạnh HCM
				</div>
				<div className={style.copyright}>
					Hộ kinh doanh: TUẤN ANH. Email: trogiup@dienthoaigiakho.vn. Chịu trách
					nhiệm nội dung : Vũ Việt Tuấn Anh
				</div>
			</div>
		</footer>
	);
};

export default Footer;
