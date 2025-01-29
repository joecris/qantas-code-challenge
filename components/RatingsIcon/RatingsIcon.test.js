import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import RatingsIcon from './RatingsIcon'
 
describe('RatingsIcon', () => {
  it('renders star ratings correctly', () => {
    const { getAllByTestId, queryAllByTestId } = render(<RatingsIcon type="star" value={3} />)
 
    const wholeStarIcons = getAllByTestId('star-ratings-whole-icon-testid');
    expect(wholeStarIcons).toHaveLength(3);

    const wholeStarGreyIcons = getAllByTestId('star-ratings-whole-grey-icon-testid');
    expect(wholeStarGreyIcons).toHaveLength(2);

    const halfStarIcons = queryAllByTestId('star-ratings-half-icon-testid');
    expect(halfStarIcons).toHaveLength(0);
  })

  it('renders star ratings with half ratings correctly', () => {
    const { getAllByTestId } = render(<RatingsIcon type="star" value={2.5} />)
 
    const wholeStarIcons = getAllByTestId('star-ratings-whole-icon-testid');
    expect(wholeStarIcons).toHaveLength(2);

    const wholeStarGreyIcons = getAllByTestId('star-ratings-whole-grey-icon-testid');
    expect(wholeStarGreyIcons).toHaveLength(2);

    const halfStarIcons = getAllByTestId('star-ratings-half-icon-testid');
    expect(halfStarIcons).toHaveLength(1);
  })

  it('renders self ratings correctly', () => {
    const { getAllByTestId, queryAllByTestId } = render(<RatingsIcon type="self" value={3} />)
 
    const wholeCircleIcons = getAllByTestId('circle-ratings-whole-icon-testid');
    expect(wholeCircleIcons).toHaveLength(3);

    const wholeCircleGreyIcons = getAllByTestId('circle-ratings-whole-grey-icon-testid');
    expect(wholeCircleGreyIcons).toHaveLength(2);

    const halfCircleIcons = queryAllByTestId('circle-ratings-half-icon-testid');
    expect(halfCircleIcons).toHaveLength(0);
  })

  it('renders self ratings with half ratings correctly', () => {
    const { getAllByTestId } = render(<RatingsIcon type="self" value={2.5} />)
 
    const wholeCircleIcons = getAllByTestId('circle-ratings-whole-icon-testid');
    expect(wholeCircleIcons).toHaveLength(2);

    const wholeCircleGreyIcons = getAllByTestId('circle-ratings-whole-grey-icon-testid');
    expect(wholeCircleGreyIcons).toHaveLength(2);

    const halfCircleIcons = getAllByTestId('circle-ratings-half-icon-testid');
    expect(halfCircleIcons).toHaveLength(1);
  })
})