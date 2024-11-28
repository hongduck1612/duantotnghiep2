'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Cart.module.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState<any[]>([
        { id: 1, name: 'Cà phê đen', price: 50000, quantity: 2, image: '/picture/cafe1.jpg' },
        { id: 2, name: 'Cà phê sữa', price: 60000, quantity: 1, image: '/picture/cafe2.png' },
        { id: 3, name: 'Cà phê bạc xỉu', price: 70000, quantity: 3, image: '/picture/cafe3.png' },
    ]);
    const [voucherCode, setVoucherCode] = useState<string>('');  // Để lưu mã giảm giá
    const [discount, setDiscount] = useState<number>(0);  // Để lưu giá trị giảm giá
    const [voucherApplied, setVoucherApplied] = useState<string>('');  // Lưu tên mã giảm giá đã áp dụng

    // Tổng tiền giỏ hàng
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Tính tổng tiền sau khi áp dụng voucher giảm giá
    const discountedPrice = totalPrice - discount;

    // Xử lý mã voucher
    const applyVoucher = () => {
        if (voucherCode === 'DISCOUNT10') {
            setDiscount(totalPrice * 0.1);  // Giảm 10% nếu mã voucher đúng
            setVoucherApplied(voucherCode);  // Lưu mã giảm giá đã nhập
        } else {
            alert('Mã giảm giá không hợp lệ');
            setVoucherApplied('');  // Nếu mã không hợp lệ, xóa thông báo voucher
        }
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Cập nhật số lượng sản phẩm
    const updateQuantity = (id: number, quantity: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    };

    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.cartTitle}>Giỏ hàng của bạn</h1>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn hiện tại không có sản phẩm nào.</p>
            ) : (
                <div className={styles.cartList}>
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.image} alt={item.name} className={styles.itemImage} />
                            <div className={styles.itemInfo}>
                                <h3>{item.name}</h3>
                                <p>Giá: {item.price} VND</p>
                            </div>
                            <div className={styles.itemActions}>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    className={styles.quantityInput}
                                />
                                <button onClick={() => removeItem(item.id)} className={styles.removeButton}>Xóa</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Mục nhập mã giảm giá */}
            <div className={styles.voucherSection}>
                <input 
                    type="text" 
                    value={voucherCode} 
                    onChange={(e) => setVoucherCode(e.target.value)} 
                    placeholder="Nhập mã giảm giá"
                    className={styles.voucherInput}
                />
                <button onClick={applyVoucher} className={styles.applyVoucherButton}>Áp dụng</button>
            </div>

            {/* Hiển thị thông báo nếu mã giảm giá đã áp dụng */}
            {voucherApplied && (
                <div className={styles.voucherMessage}>
                    <p>Đã áp dụng mã giảm giá: <strong>{voucherApplied}</strong></p>
                </div>
            )}

            <div className={styles.total}>
                <h3>Tổng cộng: {discountedPrice} VND</h3>
                <div className={styles.checkout}>
                    <Link href="/checkout">
                        <button className={styles.checkoutButton}>Thanh toán</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
