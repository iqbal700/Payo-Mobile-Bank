// ==-== Add Money Section ==-== //

const AddBtn = document.getElementById('AddBtn');

AddBtn.addEventListener('click', function() {

    // =-= get value from input =-= //

     getInputValue('bank-name');
     getInputValue('acc-num');
     const amountNum = getInputValue('amount-num');
     getInputValue('add-pin-num');
     let currentMoney = getInnerText('current-money');
     // **Add balance**
     const availableBalance = currentMoney + amountNum;
     document.getElementById('current-money')
          .innerText = availableBalance;

      // function for trans history 

         transactionHistory('Add Money');

})


 // ==-== withdraw Money Section ==-== //

    const withdrawBtn = document.getElementById('withdrawBtn');

    withdrawBtn.addEventListener('click', function() {

        // =-= get value from input =-= //

        getInputValue('agent-num');
        const AmountNum =  getInputValue('amount-count');
        getInputValue('cashout-pin-num');
        let currentMoney = getInnerText('current-money');

        // **remain new balance** 

    const remainingBalance = currentMoney - AmountNum;
            document.getElementById('current-money')
                .innerText = remainingBalance;

        // function for trans history 

           transactionHistory('Cash out');
    
    })


     // ==-== Transfer Money section ==-== //

     const sendBtn = document.getElementById('send-btn');

     sendBtn.addEventListener('click', function() {

        // get value from input element
        getInputValue('user-num');
       const transAmount = getInputValue('trans-amount');
        getInputValue('trans-pin-num');
        const currentMoney = getInnerText('current-money');

        // remaining balance
        const newBalance = currentMoney - transAmount;
        document.getElementById('current-money')
            .innerText = newBalance;

         // function for trans history 

            transactionHistory('Transfer Money');

    })


    // ==-== Get Bonus section ==-== //

    const bonusBtn = document.getElementById('bonus-Btn');

    bonusBtn.addEventListener('click', function() {

        const couponNum = 1234;
        const couponBonus = 1000;
        const currentMoney = getInnerText('current-money');
        const couponValue = getInputValue('bonus-coupon');

        if ( couponNum === couponValue ) {
            const bonusBalance = currentMoney + 1000;
            document.getElementById('current-money')
                .innerText = bonusBalance;
        }

        // function for trans history 

           transactionHistory('Get Bonus');

    
    })


    // ==-== Pay Bill section  ==-== //

    const payBtn = document.getElementById('payBtn');

    payBtn.addEventListener('click', function() {

          getInputValue('bill-bank-name');
          getInputValue('bill-acc-num');
          getInputValue('bill-pin-num');
         const billAmount =  getInputValue('bill-amount-num');
         const currentMoney =  getInnerText('current-money');

         let restBalance = currentMoney - billAmount;

         document.getElementById('current-money')
            .innerText = restBalance;

        console.log(currentMoney);  // support session qs ??

        // function for trans history 

           transactionHistory('Pay Bill');
    })


      // ==-== Transaction History section  ==-== //

      const transactionBtn = document.getElementById('transac-btn');
      
      transactionBtn.addEventListener('click', function() {

            const transactionContainer = document.getElementById('trans-history');
             transactionContainer.innerHTML = '';

            for ( const data of transactionData) {

                const div = document.createElement('div');

                div.innerHTML = `
                    
            <div class="flex justify-between items-center bg-white rounded-lg p-1.5 mt-5">
                <div class="flex items-center gap-3">
                <img class=" p-1.5 rounded-full bg-[#f4f5f7]" src="images/wallet1.png" alt="wallet">
                <div>
                    <h1 class="font-bold">${data.name}</h1>
                    <p class="font-semibold">${data.date}</p>
                </div>
                </div>
            <div><i class="fa-solid fa-ellipsis-vertical"></i></div> 
            </div>
                
            `
            transactionContainer.appendChild(div);

            }

      })


    
    // ***** Toggling Features section Here ***** //

 

    // *** Add Money ***
    document.getElementById('add-btn').addEventListener('click', function() {
       
         toggleHandle('add-money');

         const formBtns = document.getElementsByClassName('features-btn');

         for(const formBtn of formBtns ) {
                formBtn.classList.remove('border-blue-700', "bg-gray-100" )
                formBtn.classList.add('border-gray-300')
         }

         document.getElementById('add-btn').classList.remove('border-gray-300');
         document.getElementById('add-btn').classList.add("border-blue-700","bg-gray-100");

      
    })

    // *** cash out ***
    
    document.getElementById('cash-btn').addEventListener('click', function() {

         toggleHandle('cash-out');

           const formBtns = document.getElementsByClassName('features-btn');

         for(const formBtn of formBtns ) {
                formBtn.classList.remove("border-blue-700","bg-gray-100" )
                formBtn.classList.add('border-gray-300')

         }

         document.getElementById('cash-btn').classList.remove('border-gray-300');
         document.getElementById('cash-btn').classList.add("border-blue-700","bg-gray-100");
       
    })

    // *** Transfer Money ***

    document.getElementById('transfer-btn').addEventListener('click', function() {

        toggleHandle('transfer-money');

        const formBtns = document.getElementsByClassName('features-btn');

         for(const formBtn of formBtns ) {
                formBtn.classList.remove("border-blue-700","bg-gray-100" )
                formBtn.classList.add('border-gray-300')

         }

         document.getElementById('transfer-btn').classList.remove('border-gray-300');
         document.getElementById('transfer-btn').classList.add("border-blue-700","bg-gray-100");
       
    })

    // ***  Get Bonus ***

    document.getElementById('bonus-btn').addEventListener('click', function() {

        toggleHandle('bonus-money')

         const formBtns = document.getElementsByClassName('features-btn');

         for(const formBtn of formBtns ) {
                formBtn.classList.remove("border-blue-700","bg-gray-100" )
                formBtn.classList.add('border-gray-300')

         }

         document.getElementById('bonus-btn').classList.remove('border-gray-300');
         document.getElementById('bonus-btn').classList.add("border-blue-700","bg-gray-100");
       
    })


    // *** pay bill section *** 

    document.getElementById('bill-btn').addEventListener('click', function() {

        toggleHandle('pay-bill');

        const formBtns = document.getElementsByClassName('features-btn');

        for ( const formBtn of formBtns) {
                formBtn.classList.remove("border-blue-700", 'bg-gray-100');
                formBtn.classList.add('border-gray-300');
        }

        document.getElementById('bill-btn').classList.remove('border-gray-300');
        document.getElementById('bill-btn').classList.add('border-blue-700', 'bg-gray-100')

    }) 

    // *** Transaction section *** //

    document.getElementById('transac-btn').addEventListener('click', function() {

        toggleHandle('transaction');
        console.log('click')

        const formBtns = document.getElementsByClassName('features-btn');
        for ( const formBtn of formBtns) {

            formBtn.classList.remove("border-blue-700", 'bg-gray-100');
            formBtn.classList.add('border-gray-300');
        }

        
        document.getElementById('transac-btn').classList.remove('border-gray-300');
        document.getElementById('transac-btn').classList.add('border-blue-700', 'bg-gray-100')

    })

    
    // *** logout section *** 

    const logoutBtn = document.getElementById('logout-btn');

    logoutBtn.addEventListener('click', function() {
         window.location.href='index.html';
    })



// ==-== common Reusable function ==-== //
    
    // get value from input element 

        function getInputValue(id) {
            const inputValue = document.getElementById(id).value;
            return parseInt(inputValue);
        }

    // get innerText 

        function getInnerText(id) {
            const innerTxt = document.getElementById(id).innerText;
            return parseFloat(innerTxt);
        } 

    // Toggling function

       function toggleHandle(id) {

         const forms = document.getElementsByClassName('form');
            for (const forma of forms ) {
                  forma.style.display = 'none'
            }
        document.getElementById(id).style.display = 'block'
    }

    // transaction history 

        const transactionData = [];

        function transactionHistory(nam) { 

        const data = {
            name : nam,
            date : new Date().toLocaleTimeString()
        }

        transactionData.push(data);
        console.log(transactionData)

        }