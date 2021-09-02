import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';
import { isRegularExpressionLiteral } from 'typescript';

interface SearchFormProps {
    id?:string;
    data?:{}
}

export const SearchForm = (props:SearchFormProps) => {

    let { searchData, getData } = useGetData();
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any) => {
        console.log(props.id)


    }


    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <Input {...register('search')} name="search" placeholder='Enter Album or Artist' />
                </div>
                <Button type='submit'>Search</Button>
            </form>
        </div>
    )
}