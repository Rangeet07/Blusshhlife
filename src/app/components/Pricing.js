import React from 'react'
import styles from "@/app/styles/pricing.module.css"


const Pricing = () => {
  return (
    <div id='services' className={styles.text}>  
        <h2>Pricing</h2>
        <div class="pricing-table">
        <div class="pricing-card">
            <h3 class="pricing-card-header">Soft Glam Makeup</h3>
            <div class="price"> $80
              </div>
              <div className={styles.lash}>
              <p>(without lashes)</p>    

                </div>
            {/* <a href="#" class="order-btn">Order Now</a>                           */}
        </div>
 
        <div class="pricing-card">
            <h3 class="pricing-card-header">Full Glam Makeup</h3>
            <div class="price"> $130
              </div>
              <div className={styles.lash}>
              <p>(with volume lashes)</p>

                </div>
                 
            {/* <a href="#" class="order-btn">Order Now</a>                           */}
        </div>
 
 
        <div class="pricing-card">
            <h3 class="pricing-card-header">Soft Glam Makeup</h3>
            <div class="price"> $100
              </div>
              <div className={styles.lash}>
              <p>(with lashes)</p>

              </div>
                 
            {/* <a href="#" class="order-btn">Order Now</a>                           */}
        </div>
 
        <div class="pricing-card">
            <h3 class="pricing-card-header">Editorial makeup</h3>
            <div class="price"> $130
              </div>
              <div className={styles.lash}>
              <p>(with lashes)</p>
                </div>
             
                 
            {/* <a href="#" class="order-btn">Order Now</a>                           */}
        </div>
</div>
    </div>
  )
}

export default Pricing