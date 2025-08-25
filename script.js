// =-= login button functionality =-=

document.getElementById('loginButton').addEventListener('click', function(e) {
        const mobileNumber = 1234;
        const pinNumber = 1234;

        const mobileNumberValue = document.getElementById   ('mobile-number').value;

        const mobNumCon = parseInt(mobileNumberValue);

        const pinNumberValue = document.getElementById('pin-number').value;

        const pinNumCon = parseInt(pinNumberValue);

        console.log(pinNumCon, mobNumCon)

        // =-= compare with input Value ==-== // 

        if ( mobileNumber === mobNumCon && pinNumber === pinNumCon) {
             window.location.href='addmoney.html';
        } else {

           // window.location.href='login.html';

           alert('invalid credentials')
        }
})