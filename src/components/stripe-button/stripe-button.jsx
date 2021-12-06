import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const StripeButton = ({price}) => {
    const priceForStripe=price*100;
    const publishableKey='pk_test_51K3dF4SFawKpfZoTU8vuCB7GVtwP1JLKVZf14uLRvk6WzDEmJCnEMh5tq0dPVTRCcJjJI8fsjneFkRuZoeJbTrAa00Jl6bnY31'
  const  onToken=token=>console.log(token)
    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg' 
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLable='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    )
}

export default StripeButton
