// ==-== Add Money Section ==-== //

const AddBtn = document.getElementById('AddBtn');

AddBtn.addEventListener('click', function() {

    // =-= get value from input =-= //

    const bank = document.getElementById('bank-name').value;
    const accNum = parseInt( document.getElementById('acc-num').value ) ;
    const amountNum = parseInt( document.getElementById('amount-num').value) ;
    const pinNum = parseInt( document.getElementById('pin-num').value );
    let totMoney = parseInt (document.getElementById('tot-money').innerText);

    // Add money
        const totalAvailableBalance = totMoney + amountNum;
        document.getElementById('tot-money')
                .innerText = totalAvailableBalance;

        // show Add Money message
            const innerText = document.getElementById('AddBtn').innerText
             AddBtn.style.backgroundColor = 'green';
                document.getElementById('AddBtn')
                 .innerText = 'Add Money Sucessfull';
                               
})


// ==-== withdraw Money Section ==-== //

    const withdrawBtn = document.getElementById('withdrawBtn')

    withdrawBtn.addEventListener('click', function() {

        // =-= get value from input =-= //

      const agentNum = document.getElementById('agent-num').value;
      const AmountNum = parseInt(document.getElementById('amount-num').value);
      const pinNumNum = document.getElementById('pin-num').value;
      let totMoney = parseInt (document.getElementById('tot-money').innerText);

        // add new balance 

        const NewBalance = totMoney - AmountNum;
             document.getElementById('tot-money')
                 .innerText = NewBalance;

        // show withdraw message
            const innerTxt = document.getElementById('withdrawBtn').innerText
            withdrawBtn.style.backgroundColor = 'green';
            document.getElementById('withdrawBtn')
                .innerText = 'withdraw money Sucessfull'


         // toggling features for Add-Money
            const innerText = document.getElementById('AddBtn').innerText;
            AddBtn.style.backgroundColor = '#0874F2';
            document.getElementById('AddBtn')
                .innerText = 'Add Money';         
})


    // =-= Toggling section ==-= //

    // *** Add Money ***
    document.getElementById('add-btn').addEventListener('click', function() {
        document.getElementById('cash-out').style.display = 'none';
        document.getElementById('add-money').style.display = 'block';
    })

    // *** cash out ***
    document.getElementById('cash-btn').addEventListener('click', function() {
        document.getElementById('cash-out').style.display = 'block';
        document.getElementById('add-money').style.display = 'none';
    })


    // logout features 

    const logoutBtn = document.getElementById('logout-btn');

    logoutBtn.addEventListener('click', function() {
         window.location.href='login.html';
    })