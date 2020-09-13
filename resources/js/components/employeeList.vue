<template>
    <div>
        <div class="input-group search ml-auto mt-3">
            <input type="text" class=" rounded-pill form-control" placeholder="Employee Name" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <div class="input-group-append ml-2">
                <button class="btn btn-primary rounded-circle" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center shadow-sm">
                <div class="d-flex">
                    <img src="https://thispersondoesnotexist.com/image" class="avatar-profile rounded-circle mt-1"
                        alt="">
                    <div class="identity ml-2">
                        <p class="name">Ammar Joni</p>
                        <p class="otority">Admin</p>
                    </div>
                </div>
                <div class="d-flex">
                    <span class="badge badge-primary badge-pill icon"><i class=" fas fa-user-edit"></i></span>
                    <span class="badge badge-danger badge-pill icon ml-2"><i class="fas fa-user-times"></i></span>
                </div>
            </li>
        </ul>
        
    </div>

</template>
<style scoped>
    p {
        margin: 0;
    }
    .search{
      max-width: 400px;
    }
    .list-group-item {
        margin-top: 20px;
        border-radius: 35px;
        transition: 0.5s;
    }

    .list-group-item:hover {
        background-color: #e0e0e0;
    }

    .avatar-profile {
        width: 44px;
        height: 44px;
    }

    .identity {
        display: block;
    }

    .name {
        font-size: 18px;
        font-weight: bold;
    }

    .icon {
        font-size: 17px;
    }
</style>