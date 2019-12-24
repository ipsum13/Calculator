export default function calculate(state, button) {

    if (button === 'C') {
        return {
            total: '',
        }
    }
    else if (button === '=') {

        try {    
            if(state.total.indexOf('e') === 0 && state.total.indexOf('^') === 1) {
                var arr = state.total.split('^')
                return {
                    total: Math.pow(Math.E, arr[1])
                }
            }
            else if (state.total.indexOf('^') !== -1) {
                var arr1 = state.total.split('^')
                return {
                    total: Math.pow(arr1[0], arr1[1])
                }
            }
            else {
                return {
                    total: (eval(state.total) || '') + ''
                }
            }
        } catch (e) {
            return {
                total: 'error'
            }
        }
    }
    else if (button === 'del') {
        return {
            total: state.total.slice(0, -1)
        }
    }
    else if (button === "+/-") {
        if (state.total) {
            return { total: (-1 * parseFloat(state.total)).toString() };
        }
        return {};
    }
    else if (button === '%') {
        return {
            total: eval(eval(state.total.substring(0, state.total.length))) / '100'
        }
    }
    else if (button === 'customDivide') {

        return {
            total: state.total * 1 + '/'
        }
    }

    else if (button === 'sqrt') {
        return {
            total: Math.sqrt(state.total)
        }
    }
    else if (button === 'e') {
        return {
            total: Math.exp(1)
        }
    }
    else if (button === 'ePow') {
        return {
            total: 'e^'
        }
    }
    else if (button === 'power') {
        return {
            total: state.total + '^' 
        }
    }
    else if (button === 'abs') {
        return {
            total: Math.abs(state.total)
        }
    }
    else if (button === 'square') {
        return {
            total: Math.pow(state.total, 2)
        }
    }
    else if (button === 'factorial') {
        return {
            total: factorial(state.total)
        }

    }
    else if (button === 'sin') {
        return {
            total: Math.sin(state.total * Math.PI / 180)
        }
    }
    else if (button === 'tan') {
        return {
            total: Math.tan(state.total * Math.PI / 180)
        }
    }
    else if (button === 'cos') {
        return {
            total: Math.cos(state.total * Math.PI / 180)
        }
    }
    else if (button === 'ln') {
        return {
            total: Math.log(state.total)
        }
    }
    else if (button === 'log') {
        return {
            total: Math.log10(state.total)
        }
    }
    else if (button === 'pi') {
        return {
            total: Math.PI
        }
    }

    else {
        return {
            total: state.total + button
           
        }
    }
}

function factorial(num) {
    if (num === 0) { return 1; }
    else { return num * factorial(num - 1); }
}
