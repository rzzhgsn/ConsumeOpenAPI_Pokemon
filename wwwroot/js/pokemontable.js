$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/"
}).done((result) => {
    let text = "";
    $.each(result.results, function (key, val) {
        text += `<tr>
                    <td>${key + 1}</td>
                    <td>${val.name}</td>
                    <td><button class="btn btn-primary" onclick="details('${val.url}')" data-bs-toggle="modal" data-bs-target="#modalPoke">Detail</button></td>
                </tr>`;
    })
    $("#tbodyPoke").html(text)

});

function details(stringUrl) {
    $.ajax({
        url: stringUrl
    }).done((poke) => {
        console.log(poke);
        //$(".modal-title").html(poke.name)

        $(".modal-body").html(`
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <img src="` + poke.sprites['front_default'] + `" style="width:180px;height:180px;" />
                    </div>

                    <div class="col-md-10">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item border-0"><h4>` + poke.name + `</h4></li>
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item"> <b>Type</b> : ` + poke.types.map((type) => type.type.name).join(', ') + `</li>
                            <li class="list-group-item"> <b>Species</b> : ` + poke.species['name'] + `</li>
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item"> <b>Height</b> : ` + poke.height + `</li>
                            <li class="list-group-item"> <b>Weight</b> : ` + poke.weight + `</li>
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item" style="background-color:#F08080;"> <b>HP</b> : ` + poke.stats[0].base_stat + `</li>
                            <li class="list-group-item" style="background-color:#FFD700;"> <b>Attack</b> : ` + poke.stats[1].base_stat + `</li>
                            <li class="list-group-item" style="background-color:#32CD32;"> <b>Defense</b> : ` + poke.stats[2].base_stat + `</li>
                            <li class="list-group-item" style="background-color:#87CEEB;"> <b>Speed</b> : ` + poke.stats[5].base_stat + `</li>
                        </ul>
                    </div>
                </div>
            </div>
                            `);
    });
}