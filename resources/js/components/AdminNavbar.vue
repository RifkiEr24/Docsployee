<template>
     <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <router-link class="navbar-brand" to="/admin">Dashboard</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/"><i class="far  fa-bell fa-lg"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create">About</router-link>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
</template>
