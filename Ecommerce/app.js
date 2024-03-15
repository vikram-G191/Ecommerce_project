const invoice = () => {
    let si = document.getElementById("stockItems").value;
    let qty = parseInt(document.getElementById("quantity").value); 
    let rate = parseInt(document.getElementById("rate").value); 
    let amt = qty * rate;
    document.getElementById("amount").value = amt; // Set the amount value

    let file = document.getElementById("img").files[0];
    let r = new FileReader();
    r.readAsDataURL(file);
    r.onloadend = function() {
        document.getElementById('img').src=r.result;
        document.getElementById("tableid").innerHTML +=
            `<tr>
            <td>${si}</td>
            <td><img width="150px" src='${r.result}'></td> <!-- Added class and src -->
            <td>${qty}</td>
            <td>${rate}</td>
            <td>${amt}</td>
            </tr>`
    }
}
document.getElementById("btn").addEventListener("click", invoice);