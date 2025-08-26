// =-= login button functionality =-=

document.getElementById('loginButton').addEventListener('click', function(e) {

        e.stopPropagation;
        const mobileNumber = 1234;
        const pinNumber = 1234;

        const mobileNumberValue =  getInputValue('mobile-number');

         const pinNumberValue = getInputValue('pin-number');

        // =-= compare with input Value ==-== // 

        if ( mobileNumber === mobileNumberValue && pinNumber === pinNumberValue) {
             window.location.href='addmoney.html';
        } else {

           alert('please provide valid info')
        }
})


// ==-== Reusable function for input Value ==-== // 

        function getInputValue(id) {
        const inputValue = document.getElementById(id).value;
        return parseInt(inputValue);
        }