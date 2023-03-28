import './style.css';
// import img
import GeneralIcon from './assets/img/General-icon.svg';
import passwordIcon from './assets/img/passwordicon.svg';
import invitationIcon from './assets/img/Invitationsicon.svg';
import billingIcon from './assets/img/billingicon.svg';
import apssIcon from './assets/img/appsicon.svg';
import logoutIcon from './assets/img/logouticon.svg';
import visa from './assets/img/visa.svg';
// import sweetalert2
import Swal from 'sweetalert2';
// fire sweetalert2 when page loaded
Swal.fire({
  title: 'Welcome!',
  html: 'This project is built with the Tailwind framework',
  icon: 'success',
  confirmButtonText: 'Cool',
  footer: '<a href="https://uidesigndaily.com/posts/figma-billing-page-payment-day-1585">UI Source</a>',
  showClass: {
    popup: 'animate__animated animate__fadeInDown',
  },
});

// cancelSubscription proccess and change text cancelSubscription btn
const cancelSubscriptionBtn = document.querySelector('.cancel-subscription');
cancelSubscriptionBtn.addEventListener('click', openModalToCancelSubscription);

function openModalToCancelSubscription() {
  Swal.fire({
    title: 'Are you sure from cancel Subscription?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your Subscription has been canceled.', 'success');
      cancelSubscription.textContent = 'buy subscription';
    }
  });
}

//   remove list visa method
const visaMethodBtn = document.querySelector('.visa-remove');
const visaPaymentRow = document.querySelector('.visa-payment-row');

visaMethodBtn.addEventListener('click', openModalToRemoveVisa);
function openModalToRemoveVisa() {
  Swal.fire({
    title: 'Are you sure from cancel visa?',
    text: "You won't be able to revert this!",
    icon: 'Error',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Cansceled!', 'Your visa payment has been canceled.', 'success');
      visaPaymentRow.style.display = 'none ';
    }
  });
}
