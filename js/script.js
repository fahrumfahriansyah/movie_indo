
$('.tombol').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=d894b8b3&s=' + $('.dData').val(),

        success: a => {
            let data = a.Search
            let masukkan = ''
            data.forEach(a => {
                masukkan += dataMovie(a)
            });
            $('.kotak').html(masukkan)
            $('.ambilId').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=d894b8b3&i=' + $(this).data('imdb'),
                    success: m => {
                        let dataklik = why(m)
                        $('.modal-body').html(dataklik)
                    }
                })
            })
        }



    })
})



function dataMovie(a) {
    return `
    <div class="card ubah " style="width: 18rem;">
    <img src="${a.Poster}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${a.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${a.Year}</h6>
        <a href="#" class="btn btn-primary ambilId" data-toggle="modal" data-target="#movieData" data-imdb="${a.imdbID}">pilih</a>

    </div>
</div>`
}

function why(m) {
    return `<div class="row">
    <div class="col-md-3">
        <img src="${m.Poster}" class="" alt="rusak">
    </div>
    <div class="col-md-3">
        <ul class="list-group">
            <li class="list-group-item">
                <h4>${m.Title}</h4>
            </li>
            <li class="list-group-item"><strong>directur</strong>: ${m.Director}</li>
            <li class="list-group-item"><strong>actor</strong> : ${m.Actors}</li>
            <li class="list-group-item"><strong>writer</strong> : ${m.Writer}li>
            
        </ul>
    </div>
</div>`
}

