function calculate1() {
    let n = document.getElementById("N").value;
    let p = document.getElementById("P").value;
    let k = document.getElementById("K").value;
    let area = document.getElementById("area").value;
    
    // Check if values are not empty and are valid numbers
    if (n !== "" && p !== "" && k !== "" && area !== "" && !isNaN(n) && !isNaN(p) && !isNaN(k) && !isNaN(area)) {
        n = parseFloat(n);
        p = parseFloat(p);
        k = parseFloat(k);
        area = parseFloat(area);
        
        let urea = (n / 46) * 100 * area;
        let ssp = (p / 16) * 100 * area;
        let mop = (k / 60) * 100 * area;
        
        document.getElementById("ureas").textContent = urea + " kg";
        document.getElementById("ssps").textContent = ssp + " kg";
        document.getElementById("mops").textContent = mop + " kg";
    } else {
        alert("Please enter valid numbers for N, P, K, and plot size.");
    }
}
 function calculate2()
 {
    let n = document.getElementById("N2").value;
    let p = document.getElementById("P2").value;
    let k = document.getElementById("K2").value;
    let trees = document.getElementById("trees").value;
    if (n !== "" && p !== "" && k !== "" && trees !== "" && !isNaN(n) && !isNaN(p) && !isNaN(k) && !isNaN(trees)) {
        n = parseFloat(n);
        p = parseFloat(p);
        k = parseFloat(k);
        trees = parseFloat(trees);
        let nn=trees*n;
        let pp=trees*p;
        let kk=trees*k;
        let urea = (nn / 46) * 100;
        let ssp = (pp / 16) * 100;
        let mop = (kk / 60) * 100;
        
        document.getElementById("ureas2").textContent = urea + " kg";
        document.getElementById("ssps2").textContent = ssp + " kg";
        document.getElementById("mops2").textContent = mop + " kg";
    } else {
        alert("Please enter valid numbers for N, P, K, and plot size.");
    }
}