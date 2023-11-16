import React from "react";
interface Props extends React.PropsWithChildren {
  info: string;
  onDelete: React.MouseEventHandler;
  onFilmNameChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const Film: React.FC<Props> = ({
                                 info,
                                 onDelete,
                                 onFilmNameChange,
                                 children
                               }) => {
  return (
    <div className='card m-2'>
      <div className='row'>
        <div className='col'>
          <input
                 className="fs-3"
                 value={info}
                 onChange={onFilmNameChange}
            />
        </div>
        <div className='col'>
          <button className='btn btn-secondary'
                  onClick={onDelete}>Delete</button>
        </div>
      </div>
      {children}
    </div>
  );
};

export  default Film;