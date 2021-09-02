import React, { useState } from "react";

let token = 'BQDqPwTzE9l808T_5xIYu6KuXgE5QzRsyEfQrYHsWQXY1VWL6HSHkv2F7VQ6WOVSRUYeTB9woZBm4gmknKvY5Dbop-aFOSqRsZMJ3bMyUnl045hsh8YuE9oXwSgFQSCMCf4Z5S4aIZHsDZwQb8c'

export const server_calls = {
    get: async () => {
        const response = await fetch (`https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums?include_groups=album&market=ES&limit=10&offset=5`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Oops! No Vinyl Here.')
        }
        return await response.json()
    },

    delete: async(id:string) => {
        const response = await fetch (`https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums?include_groups=album&market=ES&limit=10&offset=5`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}