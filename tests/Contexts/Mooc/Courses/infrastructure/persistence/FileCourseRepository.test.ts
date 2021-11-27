import {Course} from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import {FileCourseRepository} from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';

describe('FileCourseRepository', function () {
  it('should save a course', async function () {
    const expectedCourse = new Course({id: 'some-id', name: 'some-name', duration: 'some-duration'});
    const repository = new FileCourseRepository();

    await repository.save(expectedCourse);
    const course = await repository.search('some-id');
    expect(course).toEqual(expectedCourse);
  });
});
