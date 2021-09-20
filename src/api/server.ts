import React, { useState } from "react";

let token = 'BQBZGkJevhJsEh74_RDPyXzixxx1m4x-vS0y0fImtJhd9kJxcwFE4eR67zpX7ltIL6AtLZiJdzJshxz6N7ZMkInAyNvOJxpqRU6xXMs_y8SRwJ4TIyxlwPrKuSvfQkULNtWUtyINE6mG-i4NHi4'

export const server_calls = {
    get: async () => {
        const response = await fetch (`https://api.spotify.com/v1/search?query=name:aeiouxzy&type=album&limit=50`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.json())
        if (!response.ok){
            throw new Error('Oops! No Vinyl Here.')
        }
        return await response.json()
    },

    delete: async(id:string) => {
        const response = await fetch (`https://api.spotify.com/v1/search?query=name:aeiouxzy&type=album&limit=50`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}