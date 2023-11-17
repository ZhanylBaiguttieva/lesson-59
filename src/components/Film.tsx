import React, {useEffect} from 'react';
interface Props extends React.PropsWithChildren {
  info: string;
  onDelete: React.MouseEventHandler;
  onFilmNameChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const Film: React.FC<Props> = React.memo(({
                                 info,
                                 onDelete,
                                 onFilmNameChange,
                                 children
                               }) => {

  console.log('[Film] render');

  useEffect(() => {
    console.log('[Film] mounted/updated');
  });
  return (
    <div className='card m-2'>
      <div className='row'>
        <div className='col'>
          <input
            className="fs-5 fw-normal"
            value={info}
            onChange={onFilmNameChange}
          />
        </div>
        <div className='col'>
          <button className='btn btn-secondary'
                  onClick={onDelete}>Delete
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}, (prevProps, nextProps) => {
    return prevProps.info === nextProps.info;
});

export  default Film;