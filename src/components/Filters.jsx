import { Form, useLoaderData, Link } from 'react-router-dom';
import {FormInput, FormSelect, FormRange, FormCheckbox} from './index';

const Filters = () => {
  const {meta} = useLoaderData()
  return (
    <Form className='bg-base-200 rounded-md py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* search */}
      <FormInput 
        type="search" 
        label="search product" 
        name="search" 
        size="input-sm" 
      />
      {/* category */}
      <FormSelect label="select category" name="category" list={meta.categories} size="select-sm" />
      {/* companies */}
      <FormSelect label="select company" name="company" list={meta.companies} size="select-sm" />
      {/* order */}
      <FormSelect label="sort by" name="order" list={['a-z', 'z-a', 'hight', 'low']} size="select-sm" />
      {/* Range price */}
      <FormRange name="price" label="select price" size="select-sm" />
      {/* SHIPPING */}
      <FormCheckbox name="shipping" label="free shipping" size="checkbox-sm" />
      {/* buttons */}
      <button type="submit" className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to="/products" className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  )
}

export default Filters