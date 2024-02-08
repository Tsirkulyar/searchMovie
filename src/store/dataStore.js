import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import axios from 'axios'
import _ from 'lodash';

export const useDataStore = defineStore('dataStore', () => {
    const movieArr = ref([])
    const movieObj = ref({})
    const userBookmarks = ref([])
    const userRating = ref([])
    const selectedArr = ref([])

    const ratingInLocalStorage = localStorage.getItem("userRating");
    if (ratingInLocalStorage) {
        userRating.value = JSON.parse(ratingInLocalStorage)._value;
        console.log(userRating.value)
    }
    const bookmarksInLocalStorage = localStorage.getItem("userBookmarks");
    if (bookmarksInLocalStorage) {
        userBookmarks.value = JSON.parse(bookmarksInLocalStorage)._value;
        console.log(userBookmarks.value)
    }

    const arrFilterTitle = ref([
        {
            'value': 'year',
            'body': 'по году'
        },
        {
            'value': 'rating',
            'body': 'по рейтингу'
        },
        {
            'value': 'movieLength',
            'body': 'по длинне'
        },
    ])

    const getMovies = () => {
        if (!movieArr.value.length) {

            axios.get('http://localhost:3000/docs?_limit=100')
                .then(function (response) {
                    movieArr.value.push(...response.data)
                })
        }

    }
    const getMovie = (id) => {
        axios.get(`http://localhost:3000/docs?id=${id}`)
            .then(function (response) {
                movieObj.value = response.data[0]
            })
    }
    const getSearch = (input) => {
        return fruits.filter((movieArr) =>
            movieArr.toLowerCase().includes(input.value.toLowerCase())
        );
    }

    const selectRatingFilm = () => {
        selectedArr.value = movieArr.value.filter(m => m.rating.kp = movieObj.value.rating.kp - 0.15 < m.rating.kp && movieObj.value.rating.kp + 0.15 > m.rating.kp)
    }

    const movieFilter = (value) => {
        if (value == 'rating') {
            movieArr.value.sort((movie1, movie2) => {
                return movie1[value].kp - movie2[value].kp
            })
            movieArr.value.reverse()
        } else {
            movieArr.value.sort((movie1, movie2) => {
                return movie1[value] - movie2[value]
            })
            movieArr.value.reverse()
        }

    }
    watch(
        () => userRating,
        (state) => {
            localStorage.setItem("userRating", JSON.stringify(state));
        },
        { deep: true }
    );
    watch(
        () => userBookmarks,
        (state) => {
            localStorage.setItem("userBookmarks", JSON.stringify(state));
        },
        { deep: true }
    );

    return {
        selectRatingFilm,
        movieFilter,
        selectedArr,
        getSearch,
        getMovies,
        getMovie,
        movieArr,
        movieObj,
        arrFilterTitle,
        userRating,
        userBookmarks
    }
})
