
const numberWithCommas = x => {

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

export const addNumbers = async (from, to, element, interval, increment = 1) => {

  // Set increment to 1 if not number
  increment = typeof increment !== 'number' ? 1 : increment

  // Set increment to 1 if zero
  increment = increment === 0 ? 1 : increment

  // Set increment to positive or negative based on {from} and {to}
  increment = to > from ? (increment > 0 ? increment : -increment) : (increment > 0 ? -increment : increment)

  const reVal = await new Promise((resolve, reject) => {

    element.innerHTML = numberWithCommas(from) //.toString()

    let preVal = from

    let inx = setInterval(() => {

      let newNumb

      if (parseInt(element.innerHTML.split(',').join('')) === to) { clearInterval(inx); newNumb = '`.-x-`.' }

      if (parseInt(element.innerHTML.split(',').join('')) !== preVal) { clearInterval(inx); newNumb = '`.-y-`.' }

      const terminal = increment > 0 ? (preVal + increment) >= to : (preVal - increment) <= to

      // console.log(preVal - );

      if (newNumb === '`.-x-`.') {

        resolve('finished')

      } else if (newNumb === '`.-y-`.') {

        resolve('interrupted')

      } else if (terminal === true) {

        newNumb = to

        element.innerHTML = numberWithCommas(newNumb) //.toString()

        preVal = newNumb

      } else if (terminal === false) {

        newNumb = parseInt(element.innerHTML.split(',').join('')) + increment

        element.innerHTML = numberWithCommas(newNumb) //.toString()

        preVal = newNumb

      } else {

        clearInterval(inx)

        reject('Unknown')

      }

    }, interval);

  })

  return reVal

}