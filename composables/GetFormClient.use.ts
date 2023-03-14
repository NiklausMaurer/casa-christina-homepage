export interface GetFormClientUse {
  postContactRequest(data: object): Promise<number>
}

export const useGetFormClient = () => {
  const postContactRequest = async (data: object) => {
    const response = await fetch(
      'https://getform.io/f/7cd8102d-1b2c-4fbb-a69f-d313709fc7af',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )

    return response.status
  }

  return {
    postContactRequest,
  }
}
