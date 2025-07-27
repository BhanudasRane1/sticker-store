package com.eazybytes.eazystore.repository;

import com.eazybytes.eazystore.entity.Contact;
import com.eazybytes.eazystore.entity.Customer;
import com.eazybytes.eazystore.entity.Order;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    /**
     * Fetch orders for a customer, sorted by creation date in descending order.
     */
    List<Order> findByCustomerOrderByCreatedAtDesc(Customer customer);

    List<Order> findByOrderStatus(String orderStatus);

    @Query("SELECT o FROM Order o WHERE o.customer=:customer ORDER BY o.createdAt DESC")
    List<Order> findOrderByCustomer(@Param("customer") Customer customer);

    @Query("SELECT o FROM Order o WHERE o.orderStatus=?1")
    List<Order> findByOrderByStatus(String orderStatus);

    @Query(
            value = "SELECT * FROM orders o WHERE o.customer_id=:customerId ORDER BY o.created_at DESC"
            , nativeQuery = true
    )
    List<Order> findOrderByCustomerWithNativeQuery(@Param("customerId") Long customerId);

    @Query(
            value = "SELECT * FROM orders o WHERE o.order_status=?1"
            , nativeQuery = true)
    List<Order> findByOrderByStatusWithNativeQuery(String orderStatus);


    @Modifying
    @Transactional
    @Query("UPDATE Order o SET o.orderStatus = :status,  o.updatedAt = CURRENT_TIMESTAMP, o.updatedBy=:updatedBy WHERE o.orderId = :orderId")
    int updateOrderStatus(@Param("orderId") Long orderId, @Param("status") String status, @Param("updatedBy") String updatedBy);
}