export interface GetFormClientUse {
  postContactRequest(data: object): Promise<number>
}

export const useGetFormClient = () => {
  const postContactRequest = async (data: object) => {
    const response = await fetch(
      'https://getform.io/f/ba3d2d7b-60e7-4768-9435-149b7eb22cf7',
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
