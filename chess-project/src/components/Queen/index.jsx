import PropTypes from 'prop-types';
import { QueenPiece } from "./style";

const Queen = ({ color, type }) => {
  return (
    <QueenPiece color={color} type={type}>
        {color} - {type}
      {/* Renderize a peça de acordo com a cor e o tipo */}
    </QueenPiece>
  );
};

Queen.propTypes = {
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Queen;
