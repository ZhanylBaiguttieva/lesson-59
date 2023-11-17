import React from "react";

interface Props extends React.PropsWithChildren {
  onAdd: React.MouseEventHandler;
  onFilmChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const AddFilmForm: React.FC<Props> = ({
                                        onAdd,
                                        onFilmChange
                                      }) => {
  return (
    <div className='row m-1 g-3'>
      <div className='col-auto'>
        <input
               id="input-form"
               type='text'
               placeholder="Add new film"
               className="form-control"
               onChange={onFilmChange}
        />
      </div>
      <div className='col-auto'>
        <button className="btn btn-primary"
                onClick={onAdd}>Add film</button>
      </div>
    </div>
  );
};

export  default AddFilmForm;